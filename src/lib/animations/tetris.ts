export interface Block {
  x: number;
  y: number;
  z: number;
  velocityX: number;
  velocityY: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  speed: number;
  shape: typeof tetrisShapes[0];
  size: number;
  isDragging: boolean;
  dragOffsetX: number;
  dragOffsetY: number;
  lastMouseCollision: number;
}

export const tetrisShapes = [
  // L Shape
  {
    cubes: [[0,0,0], [0,1,0], [0,2,0], [1,2,0]],
    faces: [
      // Front face (merged)
      [[0,0,1], [1,0,1], [1,3,1], [0,3,1]],
      // Right face (with step)
      [[1,0,1], [1,0,0], [1,3,0], [1,3,1]],
      // Top face (with L shape)
      [[0,0,0], [1,0,0], [1,0,1], [0,0,1]],
    ]
  },
  // T Shape
  {
    cubes: [[0,0,0], [1,0,0], [2,0,0], [1,1,0]],
    faces: [
      // Front merged face
      [[0,0,1], [3,0,1], [3,2,1], [0,2,1]],
      // Right face
      [[3,0,1], [3,0,0], [3,2,0], [3,2,1]],
      // Top face (T shaped)
      [[0,0,0], [3,0,0], [3,0,1], [0,0,1]],
    ]
  },
  // I Shape
  {
    cubes: [[0,0,0], [0,1,0], [0,2,0], [0,3,0]],
    faces: [
      // Front face (single merged rectangle)
      [[0,0,1], [1,0,1], [1,4,1], [0,4,1]],
      // Right face
      [[1,0,1], [1,0,0], [1,4,0], [1,4,1]],
      // Top face
      [[0,0,0], [1,0,0], [1,0,1], [0,0,1]],
    ]
  },
  // Z Shape
  {
    cubes: [[0,0,0], [1,0,0], [1,1,0], [2,1,0]],
    faces: [
      // Front merged face
      [[0,0,1], [2,0,1], [3,2,1], [1,2,1]],
      // Right face
      [[3,0,1], [3,0,0], [3,2,0], [3,2,1]],
      // Top face (Z shaped)
      [[0,0,0], [3,0,0], [3,0,1], [0,0,1]],
    ]
  }
];

export function createInitialBlocks(canvasWidth: number, canvasHeight: number): Block[] {
  return Array.from({ length: 20 }, () => ({
    x: Math.random() * (canvasWidth - 120),
    y: -Math.random() * canvasHeight * 3,
    z: Math.random() * 500,
    velocityX: (Math.random() - 0.5) * 0.3,
    velocityY: 0.15 + Math.random() * 0.2,
    rotationX: Math.random() * Math.PI * 2,
    rotationY: Math.random() * Math.PI * 2,
    rotationZ: Math.random() * Math.PI * 2,
    speed: 0.1 + Math.random() * 0.2,
    shape: tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)],
    size: 25 + Math.random() * 10,
    isDragging: false,
    dragOffsetX: 0,
    dragOffsetY: 0,
    lastMouseCollision: 0,
  }));
}

function transformVertex(px: number, py: number, pz: number, cx: number, cy: number, cz: number, x: number, y: number, size: number, rotX: number, rotY: number, rotZ: number) {
  px = (px * 0.5 + cx) * size;
  py = (py * 0.5 + cy) * size;
  pz = (pz * 0.5 + cz) * size;

  const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
  const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

  const nx = px;
  const ny = cosX * py - sinX * pz;
  const nz = sinX * py + cosX * pz;

  const fx = cosY * nx + sinY * nz;
  const fy = ny;
  const fz = -sinY * nx + cosY * nz;

  const rx = fx * cosZ - fy * sinZ;
  const ry = fx * sinZ + fy * cosZ;

  return { x: x + rx, y: y + ry, z: fz };
}

export function drawShape(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotX: number, rotY: number, rotZ: number, shape: typeof tetrisShapes[0]) {
  const vertices = shape.cubes.flatMap(([cx, cy, cz]) => {
    return [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ].map(([px, py, pz]) => {
      return transformVertex(px, py, pz, cx, cy, cz, x, y, size, rotX, rotY, rotZ);
    });
  });

  drawFaces(ctx, vertices, shape);
}

function drawFaces(ctx: CanvasRenderingContext2D, vertices: { x: number; y: number; z: number; }[], shape: typeof tetrisShapes[0]) {
  const faces = shape.cubes.flatMap((_, i) => {
    const base = i * 8;
    return [
      [base+0, base+1, base+2, base+3], // front
      [base+4, base+5, base+6, base+7], // back
      [base+0, base+4, base+7, base+3], // left
      [base+1, base+5, base+6, base+2], // right
      [base+0, base+1, base+5, base+4], // top
      [base+3, base+2, base+6, base+7]  // bottom
    ];
  });

  faces.sort((a, b) => {
    const az = a.reduce((sum, i) => sum + vertices[i].z, 0) / 4;
    const bz = b.reduce((sum, i) => sum + vertices[i].z, 0) / 4;
    return bz - az;
  });

  faces.forEach(face => renderFace(ctx, vertices, face));
}

function renderFace(ctx: CanvasRenderingContext2D, vertices: { x: number; y: number; z: number; }[], face: number[]) {
  ctx.beginPath();
  ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
  face.forEach(i => ctx.lineTo(vertices[i].x, vertices[i].y));
  ctx.closePath();

  ctx.fillStyle = 'rgba(66, 220, 255, 0.1)';
  ctx.fill();

  ctx.strokeStyle = 'rgba(66, 220, 255, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.shadowColor = '#42dcff';
  ctx.shadowBlur = 10;
  ctx.stroke();
}

export function checkCollision(block1: Block, block2: Block) {
  const distance = Math.sqrt(
    Math.pow(block1.x - block2.x, 2) + 
    Math.pow(block1.y - block2.y, 2)
  );
  return distance < (block1.size + block2.size) * 2;
}

export function handleCollision(block1: Block, block2: Block) {
  const dx = block2.x - block1.x;
  const dy = block2.y - block1.y;
  const angle = Math.atan2(dy, dx);
  const impulse = 4;
  
  block1.velocityX -= Math.cos(angle) * impulse;
  block1.velocityY -= Math.sin(angle) * impulse;
  block2.velocityX += Math.cos(angle) * impulse;
  block2.velocityY += Math.sin(angle) * impulse;

  block1.rotationZ += (Math.random() - 0.5) * 0.4;
  block2.rotationZ += (Math.random() - 0.5) * 0.4;
}

export function updateBlock(block: Block, canvasWidth: number, canvasHeight: number) {
  block.x += block.velocityX;
  block.y += block.velocityY;
  
  block.velocityX *= 0.99;
  block.velocityY = block.velocityY * 0.99 + 0.01;
  
  block.rotationX += 0.001;
  block.rotationY += 0.002;
  block.rotationZ += 0.001;

  if (block.y > canvasHeight + block.size * 4) {
    resetBlock(block, canvasWidth);
  }

  if (block.x < block.size || block.x > canvasWidth - block.size) {
    block.velocityX *= -0.95;
    block.x = Math.max(block.size, Math.min(canvasWidth - block.size, block.x));
  }
}

function resetBlock(block: Block, canvasWidth: number) {
  block.y = -block.size * 4;
  block.x = Math.random() * (canvasWidth - block.size * 4);
  block.velocityX = (Math.random() - 0.5) * 0.3;
  block.velocityY = 0.15 + Math.random() * 0.2;
  block.shape = tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
}

export function handleBlockMouseInteraction(mouseX: number, mouseY: number, block: Block) {
  const currentTime = Date.now();
  const cooldownPeriod = 1000;
  const isBlockInCooldown = currentTime - block.lastMouseCollision < cooldownPeriod;

  if (isBlockInCooldown) {
    return;
  }

  const dx = block.x - mouseX;
  const dy = block.y - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const collisionRadius = block.size * 2;
  
  if (distance < collisionRadius) {
    const angle = Math.atan2(dy, dx);
    const impulse = 6;
    
    const minDistance = collisionRadius * 0.5;
    block.x = mouseX + Math.cos(angle) * minDistance;
    block.y = mouseY + Math.sin(angle) * minDistance;
    
    block.velocityX = Math.cos(angle) * impulse;
    block.velocityY = Math.sin(angle) * impulse;
    block.rotationZ += (Math.random() - 0.5) * 0.4;
    
    block.lastMouseCollision = currentTime;
  }
}

export function startDragging(mouseX: number, mouseY: number, block: Block): boolean {
  const dx = mouseX - block.x;
  const dy = mouseY - block.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  if (distance < block.size * 2) {
    block.isDragging = true;
    block.dragOffsetX = block.x - mouseX;
    block.dragOffsetY = block.y - mouseY;
    return true;
  }
  return false;
}

export function stopDragging(block: Block) {
  block.isDragging = false;
} 
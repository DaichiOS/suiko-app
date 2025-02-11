'use client';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative">
      <main>
        {children}
      </main>
    </div>
  );
} 
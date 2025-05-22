export const metadata = {
  title: 'CREACO Design-Build',
  description: 'Create and visualize construction projects in 3D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

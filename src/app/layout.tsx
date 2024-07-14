import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "../../styles/theme";
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SASU",
  description: "Developed by minkyung5x5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider theme={theme}>
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}

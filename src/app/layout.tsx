import "./globals.css"

import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import Navbar from "@/components/nav-bar";
import { ConfigProvider } from 'antd';

export const metadata: Metadata = {
  title: "c1ydeh's page",
  description: "c1ydeh's website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider>
            <Navbar>
              {children}
            </Navbar>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { Zap, GitFork, Globe } from "lucide-react";
import { APP_NAME } from "@/constants/constants";


const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Docs: ["Getting Started", "API Reference", "SDKs", "Examples"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms", "Security", "GDPR"],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-semibold">{APP_NAME}</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              The authentication platform for modern teams. Fast, secure, and developer-first.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="#" className="text-white/30 hover:text-white/70 transition-colors">
                <GitFork className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/30 hover:text-white/70 transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-white/60 font-medium text-sm mb-4">{section}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/30 hover:text-white/60 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} {APP_NAME}, Inc. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with ♥ for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

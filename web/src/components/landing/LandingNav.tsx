"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/constants";


export function LandingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        background: "rgba(10, 10, 15, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <span className="text-white font-semibold text-lg">{APP_NAME}</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        <Link href="#docs" className="hover:text-white transition-colors">Docs</Link>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/login">Sign in</Link>
        </Button>
        <Button asChild variant="gradient" size="sm">
          <Link href="/register">Get started</Link>
        </Button>
      </div>
    </motion.nav>
  );
}

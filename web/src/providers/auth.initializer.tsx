"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUser, logout, setAuthResolved } from "@/redux/slices/auth.slice";
import { tokenService } from "@/lib/auth.token";
import { authService } from "@/features/auth/services/auth.service";

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const restore = async () => {
      try {
        const token = tokenService.getToken();

        if (token) {
          await dispatch(fetchUser()).unwrap();
          return;
        }

        const newAccessToken = await authService.refreshToken();
        tokenService.setToken(newAccessToken);

        await dispatch(fetchUser()).unwrap();
      } catch {
        dispatch(logout());
      } finally {
        dispatch(setAuthResolved());
      }
    };

    restore();
  }, [dispatch]);

  return <>{children}</>;
}

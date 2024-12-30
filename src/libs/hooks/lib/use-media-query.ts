"use client";

import MuiuseMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "./use-theme";

export function useMediaQuery() {
  const theme = useTheme();

  const isLargerThanMd = MuiuseMediaQuery(theme.breakpoints.up("md"));
  const isLargerThanSm = MuiuseMediaQuery(theme.breakpoints.up("sm"));
  const isLargerThanLg = MuiuseMediaQuery(theme.breakpoints.up("lg"));
  const isLargerThanXs = MuiuseMediaQuery(theme.breakpoints.up("xs"));

  const isSmallerThanMd = MuiuseMediaQuery(theme.breakpoints.down("md"));
  const isSmallerThanLg = MuiuseMediaQuery(theme.breakpoints.down("lg"));
  const isSmallerThanSm = MuiuseMediaQuery(theme.breakpoints.down("sm"));
  const isSmallerThanXs = MuiuseMediaQuery(theme.breakpoints.down("xs"));

  return {
    isLargerThanMd,
    isLargerThanLg,
    isLargerThanSm,
    isLargerThanXs,
    isSmallerThanMd,
    isSmallerThanSm,
    isSmallerThanXs,
    isSmallerThanLg,
  };
}

export function useCustomMediaQuery(customBreakpoint: number) {
  const isSmallerThanCustom = customBreakpoint
    ? MuiuseMediaQuery(`(max-width:${customBreakpoint}px)`)
    : false;
  const isLargerThanCustom = customBreakpoint
    ? MuiuseMediaQuery(`(min-width:${customBreakpoint}px)`)
    : false;

  return {
    isLargerThanCustom,
    isSmallerThanCustom,
  };
}

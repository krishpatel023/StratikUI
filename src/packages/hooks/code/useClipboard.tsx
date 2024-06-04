"use client";

import { useEffect, useState } from "react";

export default function useClipboard() {
  const copy = async (text: string, callback?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      if (callback) callback();
    } catch (err) {
      console.error("Failed to write to clipboard", err);
    }
  };

  const read = async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents", err);
    }
  };

  return {
    copy,
    read,
  };
}

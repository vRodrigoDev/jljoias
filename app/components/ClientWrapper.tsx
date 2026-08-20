'use client';

import React, { useEffect, useState } from 'react';
import { CartProvider } from '../context/CartContext';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <CartProvider>
      <div suppressHydrationWarning>{children}</div>
    </CartProvider>
  );
}

export default ClientWrapper;
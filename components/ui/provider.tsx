"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

// "use client";

// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// export function Provider({ children }: { children: any }) {
//   return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
// }

import ThemeProviderDiv from '@/components/ui/ThemeProviderDiv';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviderDiv>{children}</ThemeProviderDiv>;
};

export default ThemeProvider;

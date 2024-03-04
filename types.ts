declare global {
  namespace React {
    interface FunctionComponent<P = any> {
      Provider: React.Provider<any>;
    }
  }
}

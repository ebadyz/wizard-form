import { Suspense } from "react";
import Router from "src/router/Router";
import ErrorBoundary from "src/error-boundary/ErrorBoundary";
import Splash from "./pages/Splash";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Splash />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

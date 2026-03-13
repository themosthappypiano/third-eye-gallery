import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Pages
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import ArtistGallery from "./pages/ArtistGallery";
import Gallery from "./pages/Gallery";
import Prints from "./pages/Prints";
import Booking from "./pages/Booking";
import Visit from "./pages/Visit";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    }
  }
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/artists" component={Artists} />
      <Route path="/artists/:slug">
        {(params) => <ArtistGallery slug={params.slug} />}
      </Route>
      <Route path="/gallery" component={Gallery} />
      <Route path="/prints" component={Prints} />
      <Route path="/booking" component={Booking} />
      <Route path="/visit" component={Visit} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

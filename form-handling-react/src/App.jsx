import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

// Create Query Client
const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>

        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
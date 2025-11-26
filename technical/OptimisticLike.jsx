import { useOptimistic, useState } from "react";

export default function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // Optimistic states
  const [optimisticLike, addOptimisticLike] = useOptimistic(like);
  const [optimisticDislike, addOptimisticDislike] = useOptimistic(dislike);

  // Fake API
  const serverCall = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    return { success: true };
  };

  
  const likeAction = async () => {
    addOptimisticLike((prev) => prev + 1); // instant update on UI
    try {
      const result = await serverCall();
      if (result.success) setLike((p) => p + 1); // real update
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  const dislikeAction = async () => {
    addOptimisticDislike((prev) => prev + 1);
    try {
      const result = await serverCall();
      if (result.success) setDislike((p) => p + 1);
    } catch (err) {
      console.error("Dislike failed", err);
    }
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <img
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80"
        alt="demo"
        style={{ marginBottom: 20, width: 300, height: 300, objectFit: "cover" }}
      />

      <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
        <div>
          <button onClick={likeAction} style={{ border: "none", cursor: "pointer" }}>
            👍 Like
          </button>
          <span style={{ marginLeft: 8 }}>{optimisticLike}</span>
        </div>

        <div>
          <button onClick={dislikeAction} style={{ border: "none", cursor: "pointer" }}>
            👎 Dislike
          </button>
          <span style={{ marginLeft: 8 }}>{optimisticDislike}</span>
        </div>
      </div>
    </div>
  );
}

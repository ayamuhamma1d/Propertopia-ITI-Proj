import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { data } from "../components/auth/firebase/Firebase";

const withLoadingSpinner = (WrappedComponent, firebase) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const firebaseData = await data.fetchData();

          const assetsContext = require.context(
            "../../src/assets/",
            false,
            /\.(png|jpg|jpeg|gif|mp4|webm)$/
          );

          const allFiles = assetsContext.keys().map((file) => {
            return {
              type:
                file.includes(".mp4") || file.includes(".webm")
                  ? "video"
                  : "image",
              path: assetsContext(file).default,
            };
          });

          const filePromises = allFiles.map((file) => {
            return new Promise((resolve, reject) => {
              if (file.type === "image") {
                const img = new Image();
                img.onload = () => {
                  if (img.complete) {
                    resolve();
                  } else {
                    img.onload = resolve;
                  }
                };
                img.onerror = reject;
                img.src = file.path;
              } else if (file.type === "video") {
                const video = document.createElement("video");
                video.onloadeddata = () => {
                  if (video.readyState >= 3) {
                    resolve();
                  } else {
                    video.onloadeddata = resolve;
                  }
                };
                video.onerror = reject;
                video.src = file.path;
                document.body.appendChild(video);
              }
            });
          });

          const delayPromise = new Promise((resolve) => {
            setTimeout(resolve, 100);
          });

          await Promise.all([firebaseData, ...filePromises, delayPromise]);
        } catch (error) {
          console.error("Error fetching data or loading files:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [firebase]);

    return (
      <div>
        {loading ? <LoadingSpinner /> : <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default withLoadingSpinner;

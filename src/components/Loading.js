import loadingGIF from "../assets/loading.gif";

function Loading() {
  return (
    <div className="text-center">
      <img src={loadingGIF} alt="loading" />
    </div>
  );
}

export default Loading;

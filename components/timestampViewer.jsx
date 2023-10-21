function TimestampViewer({ published_at, read_time, likes, views }) {
  return (
    <div className="text-gray-600">
      <span className="font-semibold mb-1"></span>
      <p className="mb-1 text-[12px] py-2 text-gray-600">
        {published_at}{" "}<span className="mx-1">|</span>{" "}{read_time} min read
        <span className="mx-1">|</span>{" "} {likes} likes <span className="mx-1">|</span>{" "}
        {views} views
      </p>
    </div>
  );
}

export default TimestampViewer;

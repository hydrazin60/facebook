export const LikePost = async () => {
  try {
    const res = await axios.get(
      `http://localhost:4000/facebook/api/v1/post/liked-post/${allPost._id}`,
      { withCredentials: true }
    );

    if (res.data.success) {
      setIsLiked(!isLiked);
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data?.message || "An error occurred");
  }
};

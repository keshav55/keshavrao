// Blog posts data
export const posts = [];

export function getSortedPostsData() {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 
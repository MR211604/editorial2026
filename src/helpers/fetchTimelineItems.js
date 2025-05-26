
const items = Array.from({ length: 100 }).map((_, i) => ({ 
  title: "January 2022",
  cardTitle: `Event ${i + 1}`,
  cardSubtitle: `Event ${i + 1} Subtitle`,
  cardDetailedText: "This is the first event on the timeline.",
}));

const LIMIT = 10;
export function fetchItems(pageParam) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: items.slice(pageParam, pageParam + LIMIT),
        currentPage: pageParam,
        nextPage: pageParam + LIMIT < items.length ? pageParam + LIMIT : null,
      })
    }, 1000)
  })
}
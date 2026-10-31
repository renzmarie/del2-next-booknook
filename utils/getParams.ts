export type GetParamsProps = {
  searchParams: string | undefined;
  sortParams: string | undefined;
  topicParams: string | undefined;
  pageNumberParams: string | undefined;
};

export function getParams({
  searchParams,
  sortParams,
  topicParams,
  pageNumberParams,
}: GetParamsProps): string {
  if (searchParams !== undefined) {
    const newParams = `?page=${pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)}&search=${encodeURI(searchParams)}`;
    console.log("inside getParams searchParams if");
    return newParams;
  }

  if (sortParams !== undefined) {
    const newParams = `?page=${pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)}&sort=${encodeURI(sortParams)}`;
    return newParams;
  }

  if (topicParams !== undefined) {
    const newParams = `?page=${pageNumberParams === undefined ? 1 : parseInt(pageNumberParams)}&topic=${encodeURI(topicParams)}`;
    return newParams;
  }

  return "";
}

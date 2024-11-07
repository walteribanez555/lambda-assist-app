import {
  getCoverage,
  postCoverage,
  putCoverage,
  deleteCoverage,
} from "../models/coverages.model.mjs";

export async function getCoverages({ id }) {

  return getCoverage({ id, schema: "mobile-assistrip" });
}

export async function postCoverages({ data }) {
  return postCoverage({ data, schema: "mobile-assistrip" });
}

export async function putCoverages({ id, data }) {
  return putCoverage({ id, data, schema: "mobile-assistrip" });
}

export async function deleteCoverages({ id }) {
  return deleteCoverage({ id, schema: "mobile-assistrip" });
}

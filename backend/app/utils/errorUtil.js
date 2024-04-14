function getErrorPayload(error, status = 500, msg = "Something went wrong.") {
  if (error instanceof Error) error = { error: error.toString() };
  else if (error.error instanceof Error) error.error = error.toString();
  status = error.status ? error.status : status;
  const payload = { status, msg, ...error };
  return payload;
}

module.exports = { getErrorPayload };

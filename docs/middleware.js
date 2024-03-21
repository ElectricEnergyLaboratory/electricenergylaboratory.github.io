const next = () => {
  const headers = new Headers();
  headers.set("x-middleware-next", "1");
  return new Response(null, {
    headers,
  });
};

export const config = {
  matcher: "/",
};

const USER_NAME = process.env.BASIC_AUTH_USER || "admin";
const PASSWORD = process.env.BASIC_AUTH_PASSWORD || "admin";

export default function middleware(request) {
  const authorizationHeader = request.headers.get("authorization");

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(" ")[1];
    const [user, password] = atob(basicAuth).toString().split(":");

    if (user === USER_NAME && password === PASSWORD) {
      return next();
    }
  }

  return new Response("Basic Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

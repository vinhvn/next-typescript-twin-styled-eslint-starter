import { NextRequest, NextResponse } from 'next/server';

const middleware = (req: NextRequest) => {
  const { nextUrl, geo } = req;
  const country = geo.country || 'Canada';
  nextUrl.searchParams.set('country', country);
  return NextResponse.rewrite(nextUrl);
};

export default middleware;

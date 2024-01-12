export default function AppContentLayout({
    beforelogin,
    afterlogin
  }: any){
    const isLoggedIn = true;
    return (
      isLoggedIn ? afterlogin : beforelogin
    )
}
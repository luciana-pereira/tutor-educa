const endPoint = "https://prod-in2.100ms.live/hmsapi/luciana-videoconf-2317.app.100ms.live/";
//your saved endpoint URL from your dashboard

const fetchToken = async (user_id: any) => {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host",
      room_id: "651ccb34cb39d57e8a5d245d" 
    })
  });
  const { token } = await response.json();
  return token;
};
export default fetchToken;
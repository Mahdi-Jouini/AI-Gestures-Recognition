// import 
import { Finger , FingerCurl , FingerDirection , GestureDescription } from "fingerpose";
export const loveYouGesture = new GestureDescription ("i_love_you");
// thumb
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl , 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft , 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight , 1.0);
// index
loveYouGesture.addCurl(Finger.Index , FingerCurl.NoCurl , 1.0);
loveYouGesture.addDirection(Finger.Index , FingerDirection.VerticalUp , 1.0);

//pinky 
loveYouGesture.addCurl(Finger.Pinky , FingerCurl.NoCurl , 1.0);
loveYouGesture.addDirection(Finger.Pinky , FingerDirection.VerticalUp , 1.0);

// last
for (let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger , FingerCurl.FullCurl , 1.0);
    loveYouGesture.addDirection(finger , FingerDirection.VerticalDown , 1.0);
}



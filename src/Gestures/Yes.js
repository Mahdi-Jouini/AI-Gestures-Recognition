// import 
import { Finger , FingerCurl , FingerDirection , GestureDescription } from "fingerpose";
export const yesGesture = new GestureDescription ("Yes");
//thumb
yesGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl , 1.0);
yesGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp , 1.0);
//last
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
    yesGesture.addCurl(finger , FingerCurl.FullCurl , 2.0);
    yesGesture.addDirection(finger , FingerDirection.VerticalDown , 1.0);
}
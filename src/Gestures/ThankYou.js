//imports
import { Finger , FingerCurl , FingerDirection , GestureDescription , } from "fingerpose";
export const  thankYouGesture = new GestureDescription ("Thank_You");
//thumb
thankYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl , 1.0);
thankYouGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp , 1.0);
//all
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
   thankYouGesture.addCurl(Finger.finger, FingerCurl.NoCurl1, 1.0 );
   thankYouGesture.addDirection(finger, FingerDirection.VerticalUp , 0.1 );
    }
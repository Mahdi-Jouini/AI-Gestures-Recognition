//imports
import { Finger , FingerCurl , FingerDirection , GestureDescription } from "fingerpose";
export const  NoGesture = new GestureDescription ("No");

//thumb
NoGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl , 1.0);
NoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft , 1.0);
NoGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight , 1.0);

//last
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]){
NoGesture.addCurl(Finger.finger, FingerCurl.NoCurl ,1.0);
NoGesture.addDirection(finger, FingerDirection.Horizontfingereft , 1.0);
NoGesture.addDirection(finger, FingerDirection.HorizontalRight , 1.0);
}
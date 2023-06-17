package com.getactyv;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Matrix;
import android.net.Uri;
import android.os.SystemClock;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.camera.core.ImageProxy;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;
import com.google.mediapipe.tasks.components.containers.NormalizedLandmark;
import com.google.mediapipe.tasks.core.BaseOptions;
import com.google.mediapipe.tasks.core.Delegate;
import com.google.mediapipe.tasks.vision.core.RunningMode;
import com.google.mediapipe.tasks.vision.poselandmarker.PoseLandmarker;
import com.mrousavy.camera.frameprocessor.ImageProxyUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

public class MediaPipeImage extends ReactContextBaseJavaModule implements ActivityEventListener {
    public static String TAG = "MediaPipeImage";
    public MediaPipeImage(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public void onActivityResult(Activity activity, int i, int i1, @Nullable Intent intent) {

    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    @NonNull
    @Override
    public String getName() {
        return "MediaPipeImage";
    }

    @ReactMethod
    public void mpGetLandMark(String imageUri,int width, int height, Callback error, Callback success) throws IOException, JSONException {
        Log.e(TAG, "mpGetLandMark: "+imageUri.toString());
        PoseLandmarker poseLandmarker = SingletonPoseLandmark.getInstance(getReactApplicationContext());
        byte[] decodedString = Base64.decode(imageUri, Base64.DEFAULT);
        Bitmap finalImage = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
        Matrix matrix = new Matrix();
        matrix.postRotate(90);
        Bitmap rotatedBitmap = Bitmap.createBitmap(finalImage, 0,0,
                finalImage.getWidth(), finalImage.getHeight(),matrix,false);
//        Uri image = Uri.parse(imageUri);
////        Uri image = (Uri) imageUri;
//        Bitmap finalImage = MediaStore.Images.Media.getBitmap(getReactApplicationContext().getContentResolver(), image);
        long time = SystemClock.uptimeMillis();
        MPImage mpImage = new BitmapImageBuilder(rotatedBitmap).build();
        Log.e(TAG, "detectImage: mpImage done "+mpImage.toString() );
        List<List<NormalizedLandmark>> result = poseLandmarker.detect(mpImage).landmarks();
        Log.e(TAG, "detectImage: normalized landmark "+result.toString() );

        long inferenceTime =SystemClock.uptimeMillis() - time;
        JSONArray arr = new JSONArray();
        for(List<NormalizedLandmark> landmarker : result){
            int i = 0;
            for(NormalizedLandmark normalizedLandmark : landmarker){
                Log.e(TAG, "runDetectionOnImage: "+normalizedLandmark.x()+"\t" +normalizedLandmark.x());
                JSONObject obj = new JSONObject();
                obj.put("x",normalizedLandmark.x() * width);
                obj.put("y",normalizedLandmark.y() * height);
                obj.put("z",normalizedLandmark.z());
                Log.e(TAG, "runDetectionOnImage: "+obj.toString() );
                arr.put(i,obj);
                i = i+1;
            }
        }
        Log.e("TAG", "runDetectionOnImage: "+"length "+arr.length()+"\n"+arr.toString() );
        success.invoke(arr.toString(), Long.toString(inferenceTime),finalImage.getWidth(), finalImage.getHeight());
    }
}

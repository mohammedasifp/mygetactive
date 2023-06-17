package com.getactyv;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.google.mediapipe.tasks.core.BaseOptions;
import com.google.mediapipe.tasks.core.Delegate;
import com.google.mediapipe.tasks.vision.core.RunningMode;
import com.google.mediapipe.tasks.vision.poselandmarker.PoseLandmarker;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

public class SingletonPoseLandmark {
    private static PoseLandmarker single_instance = null;
    public static synchronized PoseLandmarker getInstance(ReactApplicationContext context) {
        String TAG = "ImageVideo activity";
        if (single_instance == null){
            Log.e("TAG", "getInstance: if block runs " );
            int DELEGATE_CPU = 0;
            Bitmap finalImage;
            Log.e(TAG, "runDetectionOnImage: method run" );
            ScheduledExecutorService backgroundService = Executors.newSingleThreadScheduledExecutor();
            BaseOptions.Builder baseOptionsBuilder = BaseOptions.builder();

            if(DELEGATE_CPU == 0){
                baseOptionsBuilder.setDelegate(Delegate.CPU);
            } else {
                baseOptionsBuilder.setDelegate(Delegate.GPU);
            }

            baseOptionsBuilder.setModelAssetPath("pose_landmarker_full.task");

            BaseOptions baseOptions = baseOptionsBuilder.build();
            Log.e(TAG, "setupPoseLandMarker: baseOption below line "+baseOptions );
            PoseLandmarker.PoseLandmarkerOptions.Builder options = PoseLandmarker.PoseLandmarkerOptions.builder()
                    .setBaseOptions(baseOptions)
                    .setMinPoseDetectionConfidence(0.5F)
                    .setMinPosePresenceConfidence(0.5F)
                    .setMinTrackingConfidence(0.5F)
                    .setRunningMode(RunningMode.IMAGE);
            Log.e(TAG, "setupPoseLandMarker: baseOption below line");
            PoseLandmarker.PoseLandmarkerOptions poseLandmarkerOptions = options.build();
            Log.e(TAG, "setupPoseLandMarker: poselandmarker above line");
            single_instance = PoseLandmarker.createFromOptions(context, poseLandmarkerOptions);
            return single_instance;
        } else {
            Log.e(TAG, "getInstance: else block runs" );
            return single_instance;
        }
    }
}

package com.getactyv;

import android.annotation.SuppressLint;
import android.graphics.Bitmap;
import android.graphics.ImageFormat;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.YuvImage;
import android.media.Image;
import android.util.Base64;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.camera.core.ImageProxy;

import com.facebook.react.bridge.ReactApplicationContext;
import com.google.mediapipe.framework.image.BitmapImageBuilder;
import com.google.mediapipe.framework.image.MPImage;
import com.google.mediapipe.tasks.vision.poselandmarker.PoseLandmarker;
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin;

import java.io.ByteArrayOutputStream;
import java.nio.ByteBuffer;

public class FrameConversion extends FrameProcessorPlugin {
    public  static String TAG = "FrameConversion";
    protected FrameConversion() {
        super("FrameConversion");
    }

    @SuppressLint("UnsafeOptInUsageError")
    @Nullable
    @Override
    public String callback(@NonNull ImageProxy imageProxy, @NonNull Object[] params) {
        Log.e(TAG, "callback: "+imageProxy.toString() );
        ImageProxy.PlaneProxy[] planes = imageProxy.getPlanes();
        ByteBuffer yBuffer = planes[0].getBuffer();
        ByteBuffer uBuffer = planes[1].getBuffer();
        ByteBuffer vBuffer = planes[2].getBuffer();

        int ySize = yBuffer.remaining();
        int uSize = uBuffer.remaining();
        int vSize = vBuffer.remaining();

        byte[] nv21 = new byte[ySize + uSize + vSize];
        yBuffer.get(nv21, 0, ySize);
        vBuffer.get(nv21, ySize, vSize);
        uBuffer.get(nv21, ySize + vSize, uSize);
        YuvImage yuvImage = new YuvImage(nv21, ImageFormat.NV21, imageProxy.getWidth(), imageProxy.getHeight(), null);
        ByteArrayOutputStream byteArrayOut = new ByteArrayOutputStream();
        yuvImage.compressToJpeg(new Rect(0, 0, yuvImage.getWidth(), yuvImage.getHeight()), 75, byteArrayOut);
        byte[] imageBytes = byteArrayOut.toByteArray();
        String encoded = Base64.encodeToString(imageBytes, Base64.DEFAULT);
//        Bitmap bitmapBuffer = Bitmap.createBitmap(imageProxy.getWidth(), imageProxy.getHeight(),Bitmap.Config.ARGB_8888);
//        bitmapBuffer.copyPixelsFromBuffer(imageProxy.getPlanes()[0].getBuffer());
//        imageProxy.close();
//        Matrix matrix = new Matrix();
//        matrix.postRotate(imageProxy.getImageInfo().getRotationDegrees());
//
//        Bitmap rotatedBitmap = Bitmap.createBitmap(bitmapBuffer, 0,0,
//                bitmapBuffer.getWidth(), bitmapBuffer.getHeight(),matrix,false);
//        Log.e(TAG, "callback: "+rotatedBitmap );
//        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
//        rotatedBitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
//        byte[] byteArray = byteArrayOutputStream .toByteArray();
//        Log.e(TAG, "callback: "+byteArray);
//        String encoded = Base64.encodeToString(byteArray, Base64.DEFAULT);
//        Log.e(TAG, "callback: "+encoded );
//
//        MPImage mpImage = new BitmapImageBuilder(rotatedBitmap).build();

        return encoded;
    }
}

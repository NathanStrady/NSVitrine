"use client";

import React, { useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

type UnityGameProps = {
    projectName: string;
};

const UnityGame = ({ projectName }: UnityGameProps) => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: `/games/${projectName}/Build/${projectName}.loader.js`,
        dataUrl: `/games/${projectName}/Build/${projectName}.data`,
        frameworkUrl: `/games/${projectName}/Build/${projectName}.framework.js`,
        codeUrl: `/games/${projectName}/Build/${projectName}.wasm`,
    });

    const unityRef = useRef<HTMLDivElement>(null);
    const [devicePixelRatio, setDevicePixelRatio] = useState(window.devicePixelRatio);

    useEffect(() => {
        const updateDevicePixelRatio = () => {
            setDevicePixelRatio(window.devicePixelRatio);
        };

        const mediaMatcher = window.matchMedia(`screen and (resolution: ${devicePixelRatio}dppx)`);
        mediaMatcher.addEventListener("change", updateDevicePixelRatio);

        return () => {
            mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
        };
    }, [devicePixelRatio]);

    const handleMouseDown = () => {
        if (unityRef.current) {
            unityRef.current.requestPointerLock();
        }
    };

    return (
        <div
            ref={unityRef}
            className="flex flex-col w-full h-full items-center justify-center"
            onMouseDown={handleMouseDown}
        >
            {!isLoaded && (
                <p className="text-white text-center">
                    Chargement de {projectName}... {Math.round(loadingProgression * 100)}%
                </p>
            )}
            <Unity
                unityProvider={unityProvider}
                className="w-full h-full items-center justify-center"
                devicePixelRatio={devicePixelRatio}
            />
        </div>
    );
};

export default UnityGame;

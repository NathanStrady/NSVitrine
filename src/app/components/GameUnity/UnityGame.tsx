"use client";

import React from "react";
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

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            {!isLoaded && (
                <p className="text-white text-center">
                    Chargement de {projectName}... {Math.round(loadingProgression * 100)}%
                </p>
            )}
            <Unity
                unityProvider={unityProvider}
                className="w-full h-full items-center justify-center"
            />
        </div>
    );
};

export default UnityGame;
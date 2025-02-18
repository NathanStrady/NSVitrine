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
        <div className="flex flex-col">
            {!isLoaded && (
                <p className="text-white mb-4">
                    Chargement de {projectName}... {Math.round(loadingProgression * 100)}%
                </p>
            )}
            <div className={`${!isLoaded ? "hidden" : "block"} aspect-video w-full h-full`}>
                <Unity
                    unityProvider={unityProvider}
                    style={{
                        width: `100vh`,
                        height: '100%',
                        justifySelf: `center`,
                        alignSelf: `center`,
                    }}
                />
            </div>
        </div>
    );
};

export default UnityGame;
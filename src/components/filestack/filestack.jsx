import React from "react";
import {Input, Label} from "reactstrap";

const ReactFilestack =
    typeof window !== "undefined" ? require("filestack-react").default : null;

export const FileStack = ({handle, handlePictureSave}) => {
    return (
        <ReactFilestack
            apikey="AwWmRHZ8TlGDVt8xpGRhAz"
            buttonText="Changer la photo de profil"
            options={{
                accept: "image/*",
                fromSources: [
                    "local_file_system",
                    "imagesearch",
                    "webcam",
                    "github",
                    "googledrive",
                    "dropbox",
                    "box",
                    "onedrive",
                    "flickr",
                    "picasa",
                    "instagram",
                    "facebook"
                ]
            }}
            customRender={({onPick}) => (
                <>
                <Label for="handle">Image</Label>
                <Input
                    type="text"
                    name="handle"
                    id="handle"
                    value={handle || ""}
                    onClick={onPick}
                />
                </>
            )}
            onSuccess={handlePictureSave}
        />
    );
};

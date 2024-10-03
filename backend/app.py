from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Data for projects
projects = [
    {
        "id": 1,
        "title": "Project 1: Object Detection",
        "abstract": "This is an object detection project using YOLOv3.",
        "image": "slidingwindanim.gif",
        "link": "ObjectDetection",
        "videos": ["exp_traj_fast_forward.mp4", "another_video.mp4", "third_video.mp4"],
        "detailed_description": "Automating the process of collecting samples (e.g., images) from a vineyard can help to monitor the condition of the grapes with precision and prevent the spreading of diseases. A critical part of this task is the development of a robust localization algorithm so that (a) a robot is able to carry out the inspection process and (b) the vine-grower knows exactly which part of the vineyard has been inspected. In this paper, we propose a novel approach for enhancing the robustness of vSLAM by utilizing multiple stereo cameras and a novel method for detecting loops in homogeneous environments based on AprilTags, where state-of-the-art approaches may find it difficult to detect them. We test the accuracy of our method using a wheeled Robotic Platform (RP) in simulation and in a synthetic vineyard developed at CSL, NTUA. The developed method achieves high accuracy in the localization of the RP in the vineyard and robustness even when a featureless object covers a large part of the Field of View of one camera. The developed software is available for testing at the CSL's bitbucket repository."
    },
    {
        "id": 2,
        "title": "Project 2: Pose Estimation",
        "abstract": "This is a pose estimation project using OpenPose.",
        "image": "trial.JPG",
        "link": "ObjectDetection2",
        "videos": ["exp_traj_fast_forward.mp4", "another_video.mp4", "third_video.mp4"],
        "detailed_description": "Pose estimation was done using the OpenPose model. This project estimates human body key points in real-time."
    },
    {
        "id": 3,
        "title": "Project 3: Image Segmentation2",
        "abstract": "This project showcases image segmentation using U-Net.",
        "image": "slidingwindanim.gif",
        "link": "ObjectDetection3",
        "videos": ["exp_traj_fast_forward.mp4", "another_video.mp4", "third_video.mp4"],
        "detailed_description": "In this project, I applied U-Net to segment medical images into meaningful regions."
    }
]

# API endpoint to get all projects
@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

# API endpoint to get a single project by ID
@app.route('/api/projects/<string:project_link>', methods=['GET'])
def get_project(project_link):
    project = next((proj for proj in projects if proj['link'] == project_link), None)
    if project:
        return jsonify(project)
    else:
        return jsonify({"error": "Project not found"}), 404
    
# Serve videos from the static folder
@app.route('/videos/<filename>')
def get_video(filename):
    return send_from_directory('static/videos', filename)

if __name__ == '__main__':
    app.run(debug=True)

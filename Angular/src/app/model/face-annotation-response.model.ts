export interface FaceAnnotationResponse {
  responses: Response[];
}

export interface Response {
  faceAnnotations: FaceAnnotation[];
}

export interface FaceAnnotation {
  boundingPoly: BoundingPoly;
  fdBoundingPoly: FdBoundingPoly;
  landmarks: Landmark[];
  rollAngle: number;
  panAngle: number;
  tiltAngle: number;
  detectionConfidence: number;
  landmarkingConfidence: number;
  joyLikelihood: string;
  sorrowLikelihood: string;
  angerLikelihood: string;
  surpriseLikelihood: string;
  underExposedLikelihood: string;
  blurredLikelihood: string;
  headwearLikelihood: string;
}

export interface BoundingPoly {
  vertices: Vertex[];
}

export interface Vertex {
  x: number;
  y?: number;
}

export interface FdBoundingPoly {
  vertices: Vertex2[];
}

export interface Vertex2 {
  x: number;
  y: number;
}

export interface Landmark {
  type: string;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

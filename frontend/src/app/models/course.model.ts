export interface Course {
  courseId: number;
  title: string;
  description: string;
  duration?: string;
  level?: string;
  price?: number;
  instructorName?: string;
  category?: string;
  imageUrl?: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  succeeded: boolean;
  data: T;
  errors: string[] | null;
  meta: any | null;
}

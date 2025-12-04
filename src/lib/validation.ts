import { z } from 'zod'

export const page1Schema = z.object({
  formFillerType: z.enum(['parent', 'student']),
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  currentGrade: z.string().min(1, 'Please select a grade'),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  countryCode: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  curriculumType: z.string().min(1, 'Please select a curriculum type'),
  schoolName: z.string().min(2, 'School name must be at least 2 characters'),
  gradeFormat: z.enum(['gpa', 'percentage']),
  gpaValue: z.string().optional(),
  percentageValue: z.string().optional(),
  scholarshipRequirement: z.enum(['full_scholarship', 'partial_scholarship', 'scholarship_optional']),
  targetGeographies: z.array(z.string()).min(1, 'Please select at least one geography'),
}).refine((data) => {
  if (data.gradeFormat === 'gpa') {
    return data.gpaValue && data.gpaValue.length > 0
  }
  return true
}, {
  message: 'GPA value is required',
  path: ['gpaValue']
}).refine((data) => {
  if (data.gradeFormat === 'percentage') {
    return data.percentageValue && data.percentageValue.length > 0
  }
  return true
}, {
  message: 'Percentage value is required',
  path: ['percentageValue']
}).refine((data) => {
  if (data.gradeFormat === 'gpa' && data.gpaValue) {
    const gpa = parseFloat(data.gpaValue)
    return !isNaN(gpa) && gpa >= 1.0 && gpa <= 10.0
  }
  return true
}, {
  message: 'GPA must be between 1.0 and 10.0',
  path: ['gpaValue']
}).refine((data) => {
  if (data.gradeFormat === 'percentage' && data.percentageValue) {
    const percentage = parseFloat(data.percentageValue)
    return !isNaN(percentage) && percentage >= 1 && percentage <= 100
  }
  return true
}, {
  message: 'Percentage must be between 1 and 100',
  path: ['percentageValue']
})

export const page2ASchema = z.object({
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  selectedDate: z.string().min(1, 'Please select a date'),
  selectedSlot: z.string().min(1, 'Please select a time slot'),
})

export const page2BSchema = z.object({
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
})

export type Page1FormData = z.infer<typeof page1Schema>
export type Page2AFormData = z.infer<typeof page2ASchema>
export type Page2BFormData = z.infer<typeof page2BSchema>

export type LeadCategory = 'bch' | 'lum-l1' | 'lum-l2' | 'nurture' | 'masters' | 'drop'

export interface FormDataForCategorization {
  formFillerType: 'parent' | 'student'
  currentGrade: string
  scholarshipRequirement: 'full_scholarship' | 'partial_scholarship' | 'scholarship_optional'
  targetGeographies: string[]
  gpaValue?: string
  percentageValue?: string
  gradeFormat: 'gpa' | 'percentage'
}

export function categorizeLeadByProgram(data: FormDataForCategorization): LeadCategory {
  if (data.formFillerType === 'student') {
    return 'nurture'
  }

  if (
    (data.gradeFormat === 'gpa' && data.gpaValue === '10') ||
    (data.gradeFormat === 'percentage' && data.percentageValue === '100')
  ) {
    return 'nurture'
  }

  if (data.scholarshipRequirement === 'full_scholarship') {
    return 'nurture'
  }

  if (data.currentGrade === '7_below') {
    return 'drop'
  }

  if (data.currentGrade === 'masters') {
    return 'masters'
  }

  if (
    ['8', '9', '10'].includes(data.currentGrade) &&
    ['scholarship_optional', 'partial_scholarship'].includes(data.scholarshipRequirement)
  ) {
    return 'bch'
  }

  if (
    data.currentGrade === '11' &&
    ['scholarship_optional', 'partial_scholarship'].includes(data.scholarshipRequirement) &&
    data.targetGeographies.includes('US')
  ) {
    return 'bch'
  }

  if (
    data.currentGrade === '11' &&
    data.scholarshipRequirement === 'scholarship_optional' &&
    data.targetGeographies.some(geo => ['UK', 'Rest of World', 'Need Guidance'].includes(geo))
  ) {
    return 'lum-l1'
  }

  if (
    data.currentGrade === '12' &&
    data.scholarshipRequirement === 'scholarship_optional'
  ) {
    return 'lum-l1'
  }

  if (
    data.currentGrade === '11' &&
    data.scholarshipRequirement === 'partial_scholarship' &&
    data.targetGeographies.some(geo => ['UK', 'Rest of World', 'Need Guidance'].includes(geo))
  ) {
    return 'lum-l2'
  }

  if (
    data.currentGrade === '12' &&
    data.scholarshipRequirement === 'partial_scholarship'
  ) {
    return 'lum-l2'
  }

  return 'nurture'
}

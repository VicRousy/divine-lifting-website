import { describe, it, expect } from 'vitest'
import { schoolConfig } from './config'

describe('schoolConfig', () => {
  it('has required fields', () => {
    expect(schoolConfig.name).toBeTruthy()
    expect(schoolConfig.tagline).toBeTruthy()
    expect(schoolConfig.address).toBeTruthy()
    expect(schoolConfig.phone).toBeTruthy()
    expect(schoolConfig.email).toContain('@')
  })

  it('has social links', () => {
    expect(schoolConfig.social.facebook).toBe('#')
    expect(schoolConfig.social.instagram).toBe('#')
  })

  it('has hours config', () => {
    expect(schoolConfig.hours.weekdays).toContain('AM')
    expect(schoolConfig.hours.office).toContain('AM')
  })
})

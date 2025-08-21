import { useState } from 'react'
import './StudentRegistration.css'

const StudentRegistration = () => {
  const [students, setStudents] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    dob: ''
  })
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    dob: ''
  })
  
  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
      valid = false
    } else {
      newErrors.firstName = ''
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
      valid = false
    } else {
      newErrors.lastName = ''
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      valid = false
    } else {
      newErrors.email = ''
    }
    
    // Phone validation
    const phoneRegex = /^\d{10}$/
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
      valid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
      valid = false
    } else {
      newErrors.phone = ''
    }
    
    // Course validation
    if (!formData.course) {
      newErrors.course = 'Course selection is required'
      valid = false
    } else {
      newErrors.course = ''
    }
    
    // Date of Birth validation
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required'
      valid = false
    } else {
      newErrors.dob = ''
    }
    
    setErrors(newErrors)
    return valid
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Add student to the list
      setStudents([...students, { ...formData, id: Date.now() }])
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        dob: ''
      })
      
      // Show success message
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }
  
  return (
    <div className="container">
      <header>
        <h1>Student Registration System</h1>
        <p>Manage student enrollments efficiently</p>
      </header>
      
      <div className="app-content">
        <div className="registration-form">
          <h2>Register New Student</h2>
          
          {showSuccess && (
            <div className="success-message show">
              Student registered successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
              />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
              />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Select Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              >
                <option value="">Select a course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Engineering">Engineering</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Medicine">Medicine</option>
                <option value="Law">Law</option>
                <option value="Arts">Arts</option>
              </select>
              {errors.course && <div className="error">{errors.course}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              {errors.dob && <div className="error">{errors.dob}</div>}
            </div>
            
            <button type="submit">Register Student</button>
          </form>
        </div>
        
        <div className="students-list">
          <h2>Registered Students ({students.length})</h2>
          
          {students.length === 0 ? (
            <div className="empty-list">
              <p>No students registered yet.</p>
              <p>Fill out the form to add students.</p>
            </div>
          ) : (
            students.map((student) => (
              <div key={student.id} className="student-card">
                <h3>{student.firstName} {student.lastName}</h3>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Date of Birth:</strong> {student.dob}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentRegistration
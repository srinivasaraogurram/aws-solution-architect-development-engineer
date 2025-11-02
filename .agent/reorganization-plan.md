# Repository Reorganization Plan

**Date**: November 2, 2025  
**Status**: Approved - Ready for Implementation

---

## New Directory Structure

```
aws-solution-architect-development-engineer/
│
├── README.md                          # Master index with complete navigation
├── .gitignore                         # Updated with proper patterns
│
├── 01-Profile/                        # Professional profile and background
│   ├── README.md                      # Profile section index
│   ├── 01-about-me.md                 # Professional summary (from Sri-About-Me-Summary.md)
│   ├── 02-career-summary.md           # Detailed career history (from Prasanna.md)
│   ├── 03-references.md               # Professional references (from Employee-References.md)
│   └── 04-education.md                # Educational background (merged from education files)
│
├── 02-Technical-Documentation/        # AWS architecture and design patterns
│   ├── README.md                      # Technical docs index
│   ├── 01-cloud-solution-architect.md # Cloud SA overview (from CloudSolutionArchitect.md)
│   ├── 02-serverless-patterns.md      # Serverless design patterns
│   ├── 03-lambda-patterns.md          # Lambda-specific patterns
│   └── diagrams/                      # Architecture diagrams
│       └── api-lambda-appsync-dynamodb.png
│
├── 03-Resume/                         # All resume variants organized by focus
│   ├── README.md                      # Index of all resume variants with descriptions
│   │
│   ├── 01-architect-focus/            # Architecture-focused resumes
│   │   ├── aws-architect-2025.docx
│   │   ├── aws-azure-architect-2025.docx
│   │   ├── multi-cloud-architect-2025.docx
│   │   └── aws-architect-short.docx
│   │
│   ├── 02-developer-focus/            # Developer-focused resumes
│   │   ├── fullstack-developer/
│   │   │   ├── fsd-3years.docx
│   │   │   └── fsd-6years.docx
│   │   └── backend-developer/
│   │       └── backend-with-glue-pyspark.docx
│   │
│   ├── 03-specialized/                # Specialized technology resumes
│   │   └── aws-bedrock-redshift-2025.docx
│   │
│   └── 04-supporting-documents/       # Work details and skill matrices
│       ├── work-details.xlsx
│       └── skill-matrix/
│
├── 04-Certifications/                 # Professional certifications
│   ├── README.md                      # Complete certification index with verification links
│   └── certificates/                  # All certification PDFs
│       ├── aws-solution-architect.pdf
│       ├── aws-cloud-practitioner.pdf
│       └── [other certification PDFs]
│
├── 05-Code-Samples/                   # Code samples and examples
│   ├── README.md                      # Code samples index
│   ├── java/                          # Java examples
│   ├── nodejs/                        # Node.js examples
│   └── python/                        # Python examples
│
├── docs/                              # GitHub Pages source (Jekyll site)
│   ├── _config.yml                    # Jekyll configuration
│   ├── index.md                       # Homepage
│   ├── CERTIFICATIONS.md              # Certifications page
│   ├── Gemfile                        # Ruby dependencies
│   └── _layouts/                      # Custom layouts
│       └── default.html
│
├── .agent/                            # Agent tracking and metadata
│   ├── conversation-log.md            # Agent-user interaction history
│   ├── user-requirements.md           # Project requirements documentation
│   ├── project-metadata.json          # Machine-readable project data
│   ├── task-tracker.md                # Detailed task management
│   └── reorganization-plan.md         # This file
│
├── .github/                           # GitHub-specific files
│   └── workflows/
│       └── gh-pages-deploy.yml        # GitHub Pages deployment workflow
│
└── scripts/                           # Utility scripts (new)
    ├── git-commit.sh
    ├── set-git-env.sh
    └── set-remote-with-pat.sh
```

---

## File Mapping: Current → New Location

### Profile Files
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `Sri-About-Me-Summary.md` | `01-Profile/01-about-me.md` | Move & Rename |
| `Prasanna.md` | `01-Profile/02-career-summary.md` | Move & Rename |
| `Employee-References.md` | `01-Profile/03-references.md` | Move & Rename |
| `education-background-v1.md` | `01-Profile/04-education.md` | Move, Merge & Rename |
| `educational-qualification.md` | `01-Profile/04-education.md` | Merge with above |

### Technical Documentation
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `CloudSolutionArchitect.md` | `02-Technical-Documentation/01-cloud-solution-architect.md` | Move & Rename |
| `AWS-Design-Serverless-Design-Pattens.md` | `02-Technical-Documentation/02-serverless-patterns.md` | Move & Rename |
| `aws-design-patterns-lambda.md` | `02-Technical-Documentation/03-lambda-patterns.md` | Move & Rename |
| `API-Lambda-AppSync-DynamoDB.png` | `02-Technical-Documentation/diagrams/api-lambda-appsync-dynamodb.png` | Move & Rename |

### Resume Directory
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `Resume/` | `03-Resume/` | Rename |
| `Resume/Sri-Architect-Resume-AWS-BedRock&RedShift-June2025.docx` | `03-Resume/03-specialized/aws-bedrock-redshift-2025.docx` | Move & Rename |
| `Resume/Sri-Architect-Resume-June2025.docx` | `03-Resume/01-architect-focus/aws-architect-2025.docx` | Move & Rename |
| `Resume/Sri-CloudArchitect-AWS-Azure-GCP-Resume-July2025.docx` | `03-Resume/01-architect-focus/multi-cloud-architect-2025.docx` | Move & Rename |
| `Resume/Sri-CloudArchitect-Azure-Resume-July2025.docx` | `03-Resume/01-architect-focus/aws-azure-architect-2025.docx` | Move & Rename |
| `Resume/Resume-With-Delta/AWSArchitect/ShortArchitect-Resume/` | `03-Resume/01-architect-focus/aws-architect-short.docx` | Move & Restructure |
| `Resume/Resume-With-Delta/Developer-FullStack/FSD-3-Years/` | `03-Resume/02-developer-focus/fullstack-developer/fsd-3years.docx` | Move & Restructure |
| `Resume/Resume-With-Delta/Developer-FullStack/FSD-6-Years/` | `03-Resume/02-developer-focus/fullstack-developer/fsd-6years.docx` | Move & Restructure |
| `Resume/Resume-With-Delta/Developer-BackEnd/AWS-Glue-WithPySpark/` | `03-Resume/02-developer-focus/backend-developer/backend-with-glue-pyspark.docx` | Move & Restructure |
| `Resume/Filled-WorkDetails-Srinivasarao.xlsx` | `03-Resume/04-supporting-documents/work-details.xlsx` | Move & Rename |
| `Resume/SkillMatrix/` | `03-Resume/04-supporting-documents/skill-matrix/` | Move |

### Certifications
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `Certifications/` | `04-Certifications/certificates/` | Move PDFs |
| _(new)_ | `04-Certifications/README.md` | Create |

### Code Samples
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `AWS-Java-Node-Python-Engineer/` | `05-Code-Samples/` | Rename & Reorganize |
| `AWS-Java-Node-Python-Engineer/Cloud-Engineer/Python/` | `05-Code-Samples/python/` | Move |
| `AWS-Java-Node-Python-Engineer/FullStack/Java/` | `05-Code-Samples/java/` | Move |
| _(needs review)_ | `05-Code-Samples/nodejs/` | Create/Move |

### Scripts
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `git-commit.sh` | `scripts/git-commit.sh` | Move |
| `set-git-env.sh` | `scripts/set-git-env.sh` | Move |
| `set-remote-with-pat.sh` | `scripts/set-remote-with-pat.sh` | Move |
| `tempCodeRunnerFile.sh` | _(delete)_ | Remove |

### GitHub Workflows
| Current Location | New Location | Action |
|-----------------|--------------|--------|
| `.github/workflows/gh-pages-deploy.yml` | _(keep)_ | Keep |
| `.github/workflows/deploy-pages.yml` | _(delete)_ | Remove (duplicate) |

### No Change
| Location | Action |
|----------|--------|
| `docs/` | Keep as-is (GitHub Pages source) |
| `.agent/` | Keep as-is (already organized) |
| `.git/` | No action |
| `.github/` | Clean up workflows only |
| `README.md` | Update in place |

---

## README.md Files to Create

Each major directory will have a README.md providing:
- Overview of the section
- List of contents with descriptions
- Quick navigation links
- Any special notes or instructions

### Required README Files

1. **01-Profile/README.md**
   - Introduction to professional background
   - Links to each profile document
   - Contact information

2. **02-Technical-Documentation/README.md**
   - Overview of technical expertise
   - Links to design patterns and architecture docs
   - Diagram descriptions

3. **03-Resume/README.md** ⭐ (Most Important)
   - Table describing each resume variant
   - When to use which resume
   - Last update dates
   - Supporting documents section

4. **04-Certifications/README.md**
   - Complete list of certifications
   - Verification links (Credly, etc.)
   - Date obtained/expiration
   - Links to PDF certificates

5. **05-Code-Samples/README.md**
   - Overview of code samples
   - Technologies demonstrated
   - How to run examples
   - Links to specific projects

6. **scripts/README.md**
   - Description of each script
   - Usage instructions
   - Prerequisites

---

## Master README.md Structure

```markdown
# Sri - AWS Solution Architect & Cloud Development Engineer

[Professional photo or banner]

## 👋 About Me
Brief introduction with key highlights

## 🚀 Quick Links
- [Professional Profile](./01-Profile/)
- [Technical Documentation](./02-Technical-Documentation/)
- [Resume Variants](./03-Resume/)
- [Certifications](./04-Certifications/)
- [Code Samples](./05-Code-Samples/)
- [GitHub Pages Site](https://srinivasaraogurram.github.io/aws-solution-architect-development-engineer/)

## 📁 Repository Structure
Overview of organization with descriptions

## 🎓 Certifications
Quick list with verification links

## 💼 Experience Highlights
- 25 years IT experience
- 10+ years AWS
- Key clients and projects

## 🛠️ Technical Skills
Organized by category

## 📧 Contact
Contact information and social links

## 📖 Documentation
Link to docs/ site

---
Last Updated: [Date] | Maintained by: Srinivasa Rao Gurram
```

---

## Numbering Conventions

### Directory Numbering
- **2 digits**: `01-`, `02-`, `03-`, etc.
- **Purpose**: Enforce display order
- **Scope**: Top-level and major subdirectories

### File Numbering
- **2 digits**: `01-`, `02-`, `03-`, etc.
- **Applied to**: Documentation and content files
- **Not applied to**: 
  - Binary files (DOCX, PDF, PNG)
  - Configuration files
  - README.md files
  - Scripts

### Resume File Naming
- Format: `{focus}-{technology}-{year}.docx`
- Examples:
  - `aws-architect-2025.docx`
  - `multi-cloud-architect-2025.docx`
  - `fullstack-developer-6years.docx`
- No numbering prefixes for resume files (use folders for organization)

---

## Implementation Sequence

### Phase 1: Profile Files
1. Create `01-Profile/` directory
2. Move and rename profile files
3. Create education.md by merging both education files
4. Create `01-Profile/README.md`
5. Commit and push

### Phase 2: Technical Documentation
1. Create `02-Technical-Documentation/` directory
2. Create `diagrams/` subdirectory
3. Move and rename technical docs
4. Move diagram image
5. Create `02-Technical-Documentation/README.md`
6. Commit and push

### Phase 3: Resume Organization
1. Create `03-Resume/` with subdirectories
2. Move resume files to appropriate categories
3. Restructure nested directories
4. Move supporting documents
5. Create comprehensive `03-Resume/README.md`
6. Commit and push

### Phase 4: Certifications
1. Create `04-Certifications/certificates/` directory
2. Move all PDF files
3. Create detailed `04-Certifications/README.md`
4. Commit and push

### Phase 5: Code Samples
1. Create `05-Code-Samples/` with language subdirectories
2. Move and reorganize code samples
3. Create `05-Code-Samples/README.md`
4. Commit and push

### Phase 6: Scripts and Cleanup
1. Create `scripts/` directory
2. Move script files
3. Create `scripts/README.md`
4. Delete obsolete files
5. Update `.gitignore`
6. Commit and push

### Phase 7: Navigation and Master README
1. Update root `README.md` with complete structure
2. Verify all README files are in place
3. Test all links
4. Commit and push

### Phase 8: GitHub Pages Fix
1. Remove duplicate workflow file
2. Update `docs/_config.yml`
3. Update `docs/index.md`
4. Update `docs/CERTIFICATIONS.md`
5. Commit and push
6. Verify deployment

### Phase 9: Final Updates
1. Update all agent tracking documents
2. Mark project complete
3. Final verification
4. Final commit

---

## Link Update Strategy

### Internal Links to Update
- Root README.md → all section links
- Each section README.md → internal file links
- docs/index.md → paths to certifications
- docs/CERTIFICATIONS.md → paths to PDF files

### External Links
- No changes needed (external links remain valid)
- Credly verification links remain unchanged
- Social media links remain unchanged

### GitHub Pages URLs
- Will be updated automatically via relative links
- Jekyll will handle new paths after deployment

---

## Git Commands Reference

### For File Moves (preserves history)
```bash
git mv old/path/file.md new/path/newname.md
git commit -m "[Structure] Move file to new location"
```

### For Directory Creation
```bash
mkdir -p 01-Profile 02-Technical-Documentation/diagrams
git add 01-Profile/ 02-Technical-Documentation/
```

### For Deletions
```bash
git rm file.md
git rm -r directory/
git commit -m "[Cleanup] Remove obsolete files"
```

### Commit Message Format
```
[Category] Brief description

Optional longer description if needed.

- Bullet points for multiple changes
- Keep related changes together
```

### Categories
- `[Agent]` - Agent tracking system updates
- `[Structure]` - Directory and file reorganization
- `[Docs]` - Documentation updates
- `[Content]` - Content changes
- `[Fix]` - Bug fixes or corrections
- `[Cleanup]` - Removing obsolete files
- `[Project]` - Project-level changes

---

## Validation Checklist

Before marking as complete, verify:

- [ ] All files moved to new locations
- [ ] All README.md files created
- [ ] Master README.md updated
- [ ] All internal links working
- [ ] No broken relative links
- [ ] All commits pushed successfully
- [ ] GitHub Pages deploys successfully
- [ ] No 404 errors on GitHub Pages site
- [ ] All PDF certificates accessible
- [ ] Code samples properly organized
- [ ] Agent tracking documents updated
- [ ] No duplicate files remaining
- [ ] .gitignore updated
- [ ] Obsolete files removed
- [ ] Git history preserved for moved files

---

## Rollback Plan

If issues occur:
1. Each phase is committed separately
2. Can revert to previous commit using:
   ```bash
   git revert <commit-hash>
   ```
3. Or checkout specific commit:
   ```bash
   git checkout <commit-hash>
   ```
4. Critical files backed up in .agent/backups/ (if needed)

---

**Plan Status**: ✅ Approved  
**Ready for Implementation**: Yes  
**Estimated Time**: 6-8 hours  
**Created**: 2025-11-02  
**Last Updated**: 2025-11-02

import CmsPage from "../models/CmsPage.js";

// GET PAGE BY SLUG (PUBLIC)
export const getPage = async (req, res) => {
  try {
    const page = await CmsPage.findOne({ slug: req.params.slug });
    if (!page) return res.status(404).json({ message: "Page not found" });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE / UPDATE PAGE (ADMIN)
export const savePage = async (req, res) => {
  try {
    const { slug, title, content } = req.body;

    const page = await CmsPage.findOneAndUpdate(
      { slug },
      { title, content, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const { blog } = require("../models");
//const axios = require("axios");
class BlogController {
  static async getAll(req, res, next) {
    try {

      const data = await blog.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      if (!data[0]) {
        throw { name: "notFound" };
      }

      res.status(200).json({
        status: "success",
        message: "data berhasil ditemukan",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const data = await blog.findByPk(user_id);
      console.log(user);
      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }

      const blog = await blog.findOne({ where: { id } });
      console.log(todo);
      if (!blog) {
        return res
          .status(404)
          .json({ message: "Todo not found for this user" });
      }
      // const data = await todos.findByPk(user_id & id);
      // if (!data) throw { name: "notFound" };

      res.status(200).json({
        status: "success",
        message: "data berhasil ditemukan",
        todo,
      });
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const { title, content, publication, category, published_at } = req.body;

      if (
        !title ||
        !content ||
        !stpublicationatus ||
        !priority ||
        !category ||
        !published_at
      ) {
        throw { name: "nullParameter" };
      }

      const data = await blog.create({
        title,
        content,
        publication,
        category,
        published_at,
      });
      console.log(data);

      res.status(200).json({
        status: "success",
        message: "data berhasil dibuat",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, content, publication, category, published_at } = req.body;
      if (!title || !content || !publication || !category || !published_at) {
        throw { name: "nullParameter" };
      }

      const [updateCount, [updatedItem]] = await blog.update(
        {
          title,
          content,
          publication,
          category,
          published_at
        },
        { where: { id }, returning: true }
      );
      if (updateCount === 1) {
        res.status(200).json({
          status_data: "success",
          message: "Data berhasil diupdate",
          data: updatedItem
        });
      } else {
        res.status(400).json({
          status_data: "error",
          message: "Data gagal diupdate",
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;

    try {

      const data = await blog.findOne({ where: { id } });
      if (!data) {
        return res
          .status(404)
          .json({ message: "Todo not found for this user" });
      }

      await data.destroy(); // Menghapus todo dari database

      return res.status(204).json({ message: "Data berhasil dihapus" }); // Mengirim respon tanpa konten (no content)
    } catch (error) {
      //console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = BlogController;


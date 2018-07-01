package org.apselectra.com;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Scanner;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import org.json.JSONObject;

/**
 * Servlet implementation class SendMail
 */
@WebServlet(description = "My First Servlet", urlPatterns = { "/SendMail" , "/sendmail.do"})
public class SendMail extends GenericServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SendMail() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub
		boolean isEmailSuccessfullSend = false;
		try {
			String body = inputStreamToString(req.getInputStream());
			System.out.println(body);
			JSONObject customerInfo = new JSONObject(body);
			isEmailSuccessfullSend = MailSender.sendEmail(customerInfo.get("name").toString(),
					customerInfo.get("subject").toString(), customerInfo.get("email").toString(),
					customerInfo.get("text").toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		res.setContentType("text/plain");
		res.setCharacterEncoding("UTF-8");
		PrintWriter out = res.getWriter();

		if (isEmailSuccessfullSend) {
			out.print("success");
		} else {
			out.print("error");
		}
	}

	private static String inputStreamToString(InputStream inputStream) {
		Scanner scanner = new Scanner(inputStream, "UTF-8");
		return scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
	}

}

package org.apselectra.com;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailSender {

	public static boolean sendEmail(String name, String subject, String customerEmail, String text) {

		try {
			System.out.println("SimpleEmail Start");

			final String password = "ankur@123";

			String smtpHostServer = "smtp.net4india.com";
			final String emailID = "info@apselectra.in";

			Properties props = System.getProperties();

			props.put("mail.smtp.host", smtpHostServer);
			props.put("mail.smtp.sendpartial", "true");
			props.put("mail.smtp.port", "587");
			props.put("mail.smtp.auth", "true");
			props.put("mail.transport.protocol", "smtps");
			props.put("mail.debug", "true");

			Session session = Session.getInstance(props, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(emailID, password);
				}
			});

			MimeMessage msg = new MimeMessage(session);
			// set message headers
			msg.addHeader("Content-type", "text/HTML; charset=UTF-8");
			msg.addHeader("format", "flowed");
			msg.addHeader("Content-Transfer-Encoding", "8bit");

			msg.setFrom(new InternetAddress(emailID, subject));

			msg.setReplyTo(InternetAddress.parse(emailID, false));

			msg.setSubject(subject, "UTF-8");

			msg.setText(text + " from " + customerEmail, "UTF-8");

			msg.setSentDate(new Date());

			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailID, false));
			System.out.println("Message is ready");
			Transport.send(msg);

			System.out.println("EMail Sent Successfully!!");
			return true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}

	}

	/*
	 * public static void main(String[] args) { sendEmail("arpit kumar",
	 * "testing subject", "itsarpitgupta@gmail.com",
	 * "text mesg to test mail function"); }
	 */

}
